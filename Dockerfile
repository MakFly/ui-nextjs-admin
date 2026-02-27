FROM oven/bun:1

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "run", "start"]
