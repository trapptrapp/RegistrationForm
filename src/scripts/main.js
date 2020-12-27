$("body").ready(async () => {
  await loadUfs()
});

async function loadUfs() {
  const ufs = await loadUf();
  const ufSelect = $("#inputEstado");
  ufSelect.find("option").remove();
  ufSelect.append("<option selected>Selecione</option>");
  ufs.map(uf => {
    ufSelect.append(`<option value="${uf.sigla}">${uf.nome}</option>`);
  })

  ufSelect.attr("disabled", false);
}