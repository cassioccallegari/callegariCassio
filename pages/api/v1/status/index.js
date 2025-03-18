function status(request, response) {
  response.status(200).json({ chave: "Não, média, coração, 日本語" });
}
export default status;
