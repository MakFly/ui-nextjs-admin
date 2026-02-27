"use client";

import { useEffect } from "react";
import { useResourceDefinitionContext } from "ra-core";
import type { LucideIcon } from "lucide-react";

type ResourceConfig = {
  name: string;
  icon?: LucideIcon;
  hasList?: boolean;
  hasCreate?: boolean;
  hasEdit?: boolean;
  hasShow?: boolean;
};

/**
 * Registers resources with ResourceDefinitionContext when using CoreAdminContext
 * without CoreAdminRoutes (e.g. Next.js App Router). CoreAdminRoutes normally
 * calls useConfigureAdminRouterFromChildren which registers Resource elements;
 * without it, useResourceDefinitions() returns empty and the sidebar has no items.
 */
export function ResourceRegistrar({ resources }: { resources: ResourceConfig[] }) {
  const { register, unregister } = useResourceDefinitionContext();

  useEffect(() => {
    resources.forEach((r) =>
      register({
        name: r.name,
        icon: r.icon,
        hasList: r.hasList ?? true,
        hasCreate: r.hasCreate ?? false,
        hasEdit: r.hasEdit ?? false,
        hasShow: r.hasShow ?? false,
      })
    );
    return () =>
      resources.forEach((r) =>
        unregister({
          name: r.name,
          icon: r.icon,
          hasList: r.hasList ?? true,
          hasCreate: r.hasCreate ?? false,
          hasEdit: r.hasEdit ?? false,
          hasShow: r.hasShow ?? false,
        })
      );
  }, [resources, register, unregister]);

  return null;
}
