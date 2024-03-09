import { createServer, Model } from "miragejs"



export function makeServer({ environment = "test" } = {}) {
  let server = createServer({

    models: {
      vans: Model,
    },

    seeds(server) {
      server.create("van", { id: "1", name: "Modest Explorer", price: 1600, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", url: "/images/van-images/van1.jpg", type: "simple", hostId: "123" })
      server.create("van", { id: "2", name: "Beach Bum", price: 1800, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", url: "/images/van-images/van2.jpg", type: "rugged", hostId: "123" })
      server.create("van", { id: "3", name: "Reliable Red", price: 1100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", url: "/images/van-images/van3.jpg", type: "luxury" })
      server.create("van", { id: "4", name: "Dreamfinder", price: 1650, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", url: "/images/van-images/van4.jpg", type: "simple" })
      server.create("van", { id: "5", name: "The Cruiser", price: 1120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", url: "/images/van-images/van5.jpg", type: "luxury", hostId: "123" })
      server.create("van", { id: "6", name: "Green Wonder", price: 1700, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", url: "/images/van-images/van6.jpg", type: "rugged" })
      server.create("van", { id: "7", name: "Yellow Rounder", price: 1080, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", url: "/images/van-images/van7.jpg", type: "rugged", hostId: "123" })
      server.create("van", { id: "8", name: "Orange Cruiser", price: 1900, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", url: "/images/van-images/van8.jpg", type: "rugged" })
  },

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
        { id:1, url: "/images/van-images/van1.jpg" },
        { id:2, url: "/images/van-images/van2.jpg" },
        { id:3, url: "/images/van-images/van3.jpg" },
        { id:4, url: "/images/van-images/van4.jpg" },
        { id:5, url: "/images/van-images/van5.jpg" },
        { id:6, url: "/images/van-images/van6.jpg" },
        { id:7, url: "/images/van-images/van7.jpg" },
        { id:8, url: "/images/van-images/van8.jpg" },
      ]
    }))

    this.get("/api/van-data/vid/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id)
    })

    this.get("/api/host/vans/:id", () => {
      const id = request.params.id;
      return this.schema.vans.where({ id, hostId: "123" })
    })

  },
})

  return server
}