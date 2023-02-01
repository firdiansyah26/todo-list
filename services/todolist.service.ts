import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

const API = () => {
  return {
    async getData() {
      return await instance.get("/todos");
    },
    async saveData(data: Object) {
      return await instance.post("/todos/add", { ...data });
    },
    async updateData(id: number, data: Object) {
      return await instance.put("/todos/" + id, { data });
    },
    async updateCheck(id: number, data: Object) {
      return await instance.patch("/todos/" + id, { data });
    },
    async removeData(id: number) {
      return await instance.delete("/todos/" + id);
    },
  };
};

export default API;
