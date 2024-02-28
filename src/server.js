import { createServer } from "miragejs"



export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    routes() {
      this.get("/api/van-data", () => ({
        images: [
          { id: 0, url: "/images/nature-van.jpg" },
          { id: 1, url: "/images/snow-van.jpg" },
          { id: 2, url: "/images/couple-van.jpg" },
          { id: 3, url: "/images/yellow-van.jpg" }
        ]
      }))
    },
  })

  return server
}