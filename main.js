class Coleta {
  constructor() {
    this.id = 1;
    this.arrayColetas = [];
  }
  salvar() {
    let coleta = this.lerDados();

    if (this.validaCampos(coleta)) {
      this.adicionar(coleta);
    }

    this.listaTabela();
    this.cancelar();
  }

  listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayColetas.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_name = tr.insertCell();
      let td_edit = tr.insertCell();

      td_id.innerText = this.arrayColetas[i].nomeId;
      td_name.innerText = this.arrayColetas[i].nome;

      let imgEdit = document.createElement("img");
      imgEdit.src = "./img/Edit.png";

      let imgDelete = document.createElement("img");
      imgDelete.src = "/img/Delete.jpg";

      td_edit.appendChild(imgEdit);
      td_edit.appendChild(imgDelete);
    }
  }

  adicionar(coleta) {
    this.arrayColetas.push(coleta);
    this.id++;
  }

  lerDados() {
    let coleta = {};

    coleta.id = this.id;
    coleta.nomeId = document.getElementById("valor").value;
    coleta.nome = document.getElementById("name").value;

    return coleta;
  }

  validaCampos(coleta) {
    let msg = "";

    if (coleta.nomeId == "") {
      msg += "Informe O id do produto \n";
    }
    if (coleta.nome == "") {
      msg += "Informe O nome do produto \n";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }

  cancelar() {
    document.getElementById("valor").value = "";
    document.getElementById("name").value = "";
  }
}

var coleta = new Coleta();

const getOptionChart1 = () => {
  return {
    tooltip: {
      show: true,
      trigger: "axis",
    },
    legend: {
      data: ["Coletas"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Coletas",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
    ],
  };
};

const initCharts = () => {
  const chart1 = echarts.init(document.getElementById("chart1"));

  chart1.setOption(getOptionChart1());
};

window.addEventListener("load", () => {
  initCharts();
});
