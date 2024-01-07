export const saveProduct = product =>{
  localStorage.setItem("product", JSON.stringify(product))
}
