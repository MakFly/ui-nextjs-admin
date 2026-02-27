import { DataProvider } from "ra-core";

const API_URL = "/api/v1/bff";

const httpClient = async (url: string, options: RequestInit = {}) => {
  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  const response = await fetch(url, { ...options, headers, credentials: "include" });
  const text = await response.text();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let json: any = {};
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    if (response.status < 200 || response.status >= 300) {
      throw new Error(text || response.statusText);
    }
  }
  if (response.status < 200 || response.status >= 300) {
    throw new Error((json.message || json.detail || json.error || response.statusText) as string);
  }
  return { status: response.status, headers: response.headers, json };
};

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination || { page: 1, perPage: 25 };
    const { field, order } = params.sort || { field: "id", order: "DESC" };
    const query = new URLSearchParams({
      page: String(page),
      per_page: String(perPage),
      sort: field,
      order: order.toLowerCase(),
    });
    if (params.filter) {
      Object.entries(params.filter).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          query.set(key, String(value));
        }
      });
    }
    const { json } = await httpClient(`${API_URL}/${resource}?${query}`);
    const list = json.data || json.items || (Array.isArray(json) ? json : []);
    return { data: list, total: json.total ?? list.length };
  },

  getOne: async (resource, params) => {
    const { json } = await httpClient(`${API_URL}/${resource}/${params.id}`);
    return { data: json };
  },

  create: async (resource, params) => {
    const { json } = await httpClient(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  update: async (resource, params) => {
    const { json } = await httpClient(`${API_URL}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    await httpClient(`${API_URL}/${resource}/${params.id}`, { method: "DELETE" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return { data: params.id } as any;
  },

  getMany: async (resource, params) => {
    const results = await Promise.all(
      params.ids.map((id) => httpClient(`${API_URL}/${resource}/${id}`))
    );
    return { data: results.map((r) => r.json) };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const query = new URLSearchParams({
      page: String(page),
      per_page: String(perPage),
      [params.target]: String(params.id),
    });
    const { json } = await httpClient(`${API_URL}/${resource}?${query}`);
    const list = json.data || json.items || (Array.isArray(json) ? json : []);
    return { data: list, total: json.total ?? list.length };
  },

  updateMany: async () => ({ data: [] }),

  deleteMany: async (resource, params) => {
    await Promise.all(
      params.ids.map((id) => httpClient(`${API_URL}/${resource}/${id}`, { method: "DELETE" }))
    );
    return { data: params.ids };
  },
};
