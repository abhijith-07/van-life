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

      this.get("/api/van-data/vans/", () => ({
        images: [
          { id:0, url: "/images/van-images/van1.jpg" },
          { id:1, url: "/images/van-images/van2.jpg" },
          { id:2, url: "/images/van-images/van3.jpg" },
          { id:3, url: "/images/van-images/van4.jpg" },
          { id:4, url: "/images/van-images/van5.jpg" },
          { id:5, url: "/images/van-images/van6.jpg" },
          { id:6, url: "/images/van-images/van7.jpg" },
          { id:7, url: "/images/van-images/van8.jpg" },
        ]
      }))
    },
  })

  return server
}