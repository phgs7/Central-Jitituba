document.addEventListener("DOMContentLoaded", () => {
    const tabelaContainer = document.getElementById("tabelas");

    // Dados reorganizados com meses por nome, separando ano a ano
    const dadosSafras = [
{
  safra: "2017",
  diasSafra: 365,
  dados: [
      { mes: "Janeiro", ano: "2017", consumo:6398.410, exportada: 6249.350 },
      { mes: "Fevereiro", ano: "2017", consumo: 6210.120, exportada: 5533.079 },
      { mes: "Março", ano: "2017", consumo: 6285.080, exportada: 1808.035 },
      { mes: "Abril", ano: "2017", consumo: 0.0, exportada: 0.0 },
      { mes: "Maio", ano: "2017", consumo: 0.0, exportada: 0.0 },
      { mes: "Junho", ano: "2017", consumo: 0.0, exportada: 0.0 },
      { mes: "Julho", ano: "2017", consumo: 0.0, exportada: 0.0 },
      { mes: "Agosto", ano: "2017", consumo: 0.0, exportada: 0.0 },
      { mes: "Setembro", ano: "2017", consumo: 6235.265, exportada: 1045.533 },
      { mes: "Outubro", ano: "2017", consumo: 6358.098, exportada: 3875.805 },
      { mes: "Novembro", ano: "2017", consumo: 6315.56, exportada: 4393.427 },
      { mes: "Dezembro", ano: "2017", consumo: 6350.87, exportada: 5241.723 },
  ],
},
{
  safra: "2018",
  diasSafra: 365,
  dados: [
      { mes: "Janeiro", ano: "2018", consumo: 6210.210, exportada: 3642.351 },
      { mes: "Fevereiro", ano: "2018", consumo: 6295.320, exportada: 5413.884 },
      { mes: "Março", ano: "2018", consumo: 5580.150, exportada: 3673.420 },
      { mes: "Abril", ano: "2018", consumo: 0.0, exportada: 0.0 },
      { mes: "Maio", ano: "2018", consumo: 0.0, exportada: 0.0 },
      { mes: "Junho", ano: "2018", consumo: 0.0, exportada: 0.0 },
      { mes: "Julho", ano: "2018", consumo: 0.0, exportada: 0.0 },
      { mes: "Agosto", ano: "2018", consumo: 5747.210, exportada: 2980.716 },
      { mes: "Setembro", ano: "2018", consumo: 6292.030, exportada: 5064.247 },
      { mes: "Outubro", ano: "2018", consumo: 6295.120, exportada: 6120.081 },
      { mes: "Novembro", ano: "2018", consumo: 6315.256, exportada: 6679.410 },
      { mes: "Dezembro", ano: "2018", consumo: 6280.680, exportada: 5844.696 },
  ],
},
{
  safra: "2019",
  diasSafra: 365,
  dados: [
      { mes: "Janeiro", ano: "2019", consumo: 7420.010, exportada: 3317.127 },
      { mes: "Fevereiro", ano: "2019", consumo: 7203.080, exportada: 3086.666 },
      { mes: "Março", ano: "2019", consumo: 3651.010, exportada: 3842.367 },
      { mes: "Abril", ano: "2019", consumo: 0.0, exportada: 0.0 },
      { mes: "Maio", ano: "2019", consumo: 0.0, exportada: 0.0 },
      { mes: "Junho", ano: "2019", consumo: 0.0, exportada: 0.0 },
      { mes: "Julho", ano: "2019", consumo: 0.0, exportada: 0.0 },
      { mes: "Agosto", ano: "2019", consumo: 5070.030, exportada: 1880.254 },
      { mes: "Setembro", ano: "2019", consumo: 6981.050, exportada: 2891.114 },
      { mes: "Outubro", ano: "2019", consumo: 7420.080, exportada: 5304.977 },
      { mes: "Novembro", ano: "2019", consumo: 7447.020, exportada: 7298.654 },
      { mes: "Dezembro", ano: "2019", consumo: 7360.010, exportada: 7446.299 },
  ],
},
{
  safra: "2020",
  diasSafra: 365,
  dados: [
      { mes: "Janeiro", ano: "2020", consumo: 7420.010, exportada: 7065.419 },
      { mes: "Fevereiro", ano: "2020", consumo: 7203.011, exportada: 5291.733 },
      { mes: "Março", ano: "2020", consumo: 3651.080, exportada: 2375.055 },
      { mes: "Abril", ano: "2020", consumo: 249.010, exportada: 0.0 },
      { mes: "Maio", ano: "2020", consumo: 0.0, exportada: 0.0 },
      { mes: "Junho", ano: "2020", consumo: 0.0, exportada: 0.0 },
      { mes: "Julho", ano: "2020", consumo: 0.0, exportada: 0.0 },
      { mes: "Agosto", ano: "2020", consumo: 374.311, exportada: 74.964},
      { mes: "Setembro", ano: "2020", consumo: 7394.070, exportada: 2230.352 },
      { mes: "Outubro", ano: "2020", consumo: 7287.020, exportada: 4565.295 },
      { mes: "Novembro", ano: "2020", consumo: 7518.010, exportada: 4814.437 },
      { mes: "Dezembro", ano: "2020", consumo: 7830.050, exportada: 5808.461 },
  ],
},
{
  safra: "2021",
  diasSafra: 365,
  dados: [
      { mes: "Janeiro", ano: "2021", consumo: 7558.010, exportada: 4539.322 },
      { mes: "Fevereiro", ano: "2021", consumo: 7144.010, exportada: 3690.395 },
      { mes: "Março", ano: "2021", consumo: 7031.050, exportada: 3133.686 },
      { mes: "Abril", ano: "2021", consumo: 3600.030, exportada: 369.706},
      { mes: "Maio", ano: "2021", consumo: 0.0, exportada: 0.0 },
      { mes: "Junho", ano: "2021", consumo: 0.0, exportada: 0.0 },
      { mes: "Julho", ano: "2021", consumo: 0.0, exportada: 0.0 },
      { mes: "Agosto", ano: "2021", consumo: 1787.020, exportada: 338.628 },
      { mes: "Setembro", ano: "2021", consumo: 6585.020, exportada: 2438.099},
      { mes: "Outubro", ano: "2021", consumo: 7597.130, exportada: 3489.878},
      { mes: "Novembro", ano: "2021", consumo: 7306.080, exportada: 5529.137 },
      { mes: "Dezembro", ano: "2021", consumo: 7428.050, exportada: 4656.566 },
  ],
},
{
  safra: "2022",
  diasSafra: 365,
  dados: [
      { mes: "Janeiro", ano: "2022", consumo: 7677.060, exportada: 4262.131 },
      { mes: "Fevereiro", ano: "2022", consumo: 6873.090, exportada: 3759.497 },
      { mes: "Março", ano: "2022", consumo: 6258.010, exportada: 1293.401 },
      { mes: "Abril", ano: "2022", consumo: 84.020, exportada: 11.159 },
      { mes: "Maio", ano: "2022", consumo: 0.0, exportada: 0.0 },
      { mes: "Junho", ano: "2022", consumo: 0.0, exportada: 0.0 },
      { mes: "Julho", ano: "2022", consumo: 0.0, exportada: 0.0 },
      { mes: "Agosto", ano: "2022", consumo: 316.080, exportada: 6.903 },
      { mes: "Setembro", ano: "2022", consumo: 7093.013, exportada: 2360.443 },
      { mes: "Outubro", ano: "2022", consumo: 7636.112, exportada: 2992.421 },
      { mes: "Novembro", ano: "2022", consumo: 7659.230, exportada: 1999.348 },
      { mes: "Dezembro", ano: "2022", consumo: 7831.151, exportada: 2879.312 },
  ],
},
{
  safra: "2023",
  diasSafra: 365,
  dados: [
      { mes: "Janeiro", ano: "2023", consumo: 7654.10, exportada: 3635.929},
      { mes: "Fevereiro", ano: "2023", consumo: 7699.09, exportada: 2914.771 },
      { mes: "Março", ano: "2023", consumo: 7607.05, exportada: 2958.953 },
      { mes: "Abril", ano: "2023", consumo: 3620.11, exportada: 818.328 },
      { mes: "Maio", ano: "2023", consumo: 0.0, exportada: 25.648 },
      { mes: "Junho", ano: "2023", consumo: 0, exportada: 0.0 },
      { mes: "Julho", ano: "2023", consumo: 0, exportada: 0.0 },
      { mes: "Agosto", ano: "2023", consumo: 1321.17, exportada: 545.763 },
      { mes: "Setembro", ano: "2023", consumo: 6846.68, exportada: 3014.81 },
      { mes: "Outubro", ano: "2023", consumo: 7777.63, exportada: 5213.88 },
      { mes: "Novembro", ano: "2023", consumo: 7621.44, exportada: 5179.295 },
      { mes: "Dezembro", ano: "2023", consumo: 7539.56, exportada: 4743.120 },
  ],
},
{
  safra: "2024",
  diasSafra: 365,
  dados: [
      { mes: "Janeiro", ano: "2024", consumo: 7703.75, exportada: 5460.15 },
      { mes: "Fevereiro", ano: "2024", consumo: 6956.63, exportada: 4138.12 },
      { mes: "Março", ano: "2024", consumo: 4655.46, exportada: 1975.32},
      { mes: "Abril", ano: "2024", consumo: 0.0, exportada: 0.0 },
      { mes: "Maio", ano: "2024", consumo: 0.0, exportada: 0.0 },
      { mes: "Junho", ano: "2024", consumo: 0.0, exportada: 0.0 },
      { mes: "Julho", ano: "2024", consumo: 0.0, exportada: 0.0 },
      { mes: "Agosto", ano: "2024", consumo: 1172.32, exportada: 437.12 },
      { mes: "Setembro", ano: "2024", consumo: 1602.11, exportada: 949.51 },
      { mes: "Outubro", ano: "2024", consumo: 0.0, exportada: 0.0 },
      { mes: "Novembro", ano: "2024", consumo: 0.0, exportada: 0.0 },
      { mes: "Dezembro", ano: "2024", consumo: 0.0, exportada: 0.0 },
  ],
},
    ];

    // Gera as tabelas dinâmicas
    dadosSafras.forEach((safraData) => {
        const totalConsumo = safraData.dados.reduce((acc, item) => acc + item.consumo, 0);
        const totalExportada = safraData.dados.reduce((acc, item) => acc + item.exportada, 0);

        const tabelaHTML = `
            <div class="table-container">
                <h2>Safra ${safraData.safra}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Energia Elétrica Consumo Fabrica (MWh)</th>
                            <th>Energia Elétrica Exportada (MWh)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${safraData.dados
                            .map(
                                (item) => `
                            <tr>
                                <td>${item.mes}</td>
                                <td>${item.ano}</td>
                                <td>${item.consumo.toLocaleString("pt-BR")}</td>
                                <td>${item.exportada.toLocaleString("pt-BR")}</td>
                            </tr>
                        `
                            )
                            .join("")}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2">Total</td>
                            <td>${totalConsumo.toLocaleString("pt-BR")} MWh</td>
                            <td>${totalExportada.toLocaleString("pt-BR")} MWh</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        `;

        tabelaContainer.innerHTML += tabelaHTML;
    });
});
