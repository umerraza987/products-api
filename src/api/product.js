import axiosInstance from "./axiosinstance";
import React from 'react'

export const getProducts =async () => {
    const response = await axiosInstance.get("/products")

  return response.data
}
export const getProctsById =async (id) => {
    const response = await axiosInstance.get(`/products/${id}`)

  return response.data
}