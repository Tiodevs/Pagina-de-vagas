const vagas = [
    {
      titulo: "Dev Fiori - Pleno",
      empresa: "Google",
      local: "Remoto - PJ",
      salario: "R$ 10.000",
      cidade: "Curitiba",
      data: "28/03/25",
      descricao:
        "Sua carreira SAP está aqui na Assumtek. Aprenda as principais funcionalidades do SAP com o mercado que mais cresce no mundo e tenha um lugar de destaque.",
      contato: "rh@teste.com.br",
    },
    {
      titulo: "Dev Fiori - Pleno",
      empresa: "Google",
      local: "Remoto - PJ",
      salario: "R$ 10.000",
      cidade: "Curitiba",
      data: "28/03/25",
      descricao:
        "Sua carreira SAP está aqui na Assumtek. Aprenda as principais funcionalidades do SAP com o mercado que mais cresce no mundo e tenha um lugar de destaque.",
      contato: "rh@teste.com.br",
    },
    {
      titulo: "Dev Fiori - Pleno",
      empresa: "Google",
      local: "Remoto - PJ",
      salario: "R$ 10.000",
      cidade: "Curitiba",
      data: "28/03/25",
      descricao:
        "Sua carreira SAP está aqui na Assumtek. Aprenda as principais funcionalidades do SAP com o mercado que mais cresce no mundo e tenha um lugar de destaque.",
      contato: "rh@teste.com.br",
    },
    // Adicione mais vagas se quiser
  ];
  
  const container = document.getElementById("job-list");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeButton = document.querySelector(".close-button");
  
  vagas.forEach((vaga, index) => {
    const card = document.createElement("div");
    card.className = "job-card";
  
    card.innerHTML = `
      <div class="job-info">
        <h3>${vaga.titulo}</h3>
        <p>${vaga.empresa} - ${vaga.local} - ${vaga.salario} - ${vaga.cidade} - ${vaga.data}</p>
        <p>${vaga.descricao}</p>
        <p><strong>Como se candidatar:</strong> Envie um e-mail para ${vaga.contato}</p>
      </div>
      <button data-index="${index}">Saber mais</button>
    `;
  
    container.appendChild(card);
  });
  
  // Abrir o modal
  document.querySelectorAll(".job-card button").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      const vaga = vagas[index];
      modalBody.innerHTML = `
        <h2>${vaga.titulo}</h2>
        <p><strong>Empresa:</strong> ${vaga.empresa}</p>
        <p><strong>Local:</strong> ${vaga.local}</p>
        <p><strong>Salário:</strong> ${vaga.salario}</p>
        <p><strong>Cidade:</strong> ${vaga.cidade}</p>
        <p><strong>Data:</strong> ${vaga.data}</p>
        <p>${vaga.descricao}</p>
        <p><strong>Contato:</strong> ${vaga.contato}</p>
      `;
      modal.style.display = "flex";
    });
  });
  
  // Fechar o modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  