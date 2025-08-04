import requests
from bs4 import BeautifulSoup
import pandas as pd
import json

# URL da página
url = "https://inara.cz/elite/minorfaction-presence/77448/"

# Faz a requisição HTTP
response = requests.get(url)
response.raise_for_status()  # garante que a página foi carregada

# Parse do conteúdo HTML com BeautifulSoup
soup = BeautifulSoup(response.text, "html.parser")

# A tabela desejada está dentro da div com id "table_minorFactionsPresence" ou similar
# Vamos procurar a tabela principal na página
table = soup.find("table")

if not table:
    print("Tabela não encontrada na página.")
    exit()

# Usando pandas para ler a tabela direto do HTML
# Como o pandas pode ler direto da URL, mas para garantir o parse correto usaremos o HTML extraído
dfs = pd.read_html(str(table))

# Normalmente, a primeira tabela será a desejada
df = dfs[0]

# Salva para CSV localmente, se quiser
df.to_csv("minor_faction_presence.csv", index=False)

# Lê o CSV
df = pd.read_csv("minor_faction_presence.csv")

# Função para criar o objeto com a estrutura desejada
def criar_objeto(row):
    # Como exemplo, status = Government
    government = row["Government"]
    if pd.isna(government) or str(government).strip() == "":
        government = "no government"

    allegiance = row["Allegiance"]

    power = row["Power"]
    if pd.isna(power) or str(power).strip() == "":
        power = "unoccupied"

    population = row["Population"]

    number_of_factions = row["Fac"]

    influence_str = row["Inf"].replace("%", "").strip()
    indigo_influence = float(influence_str)

    is_leader = "yes" if  bool(number_of_factions == 1 or indigo_influence > 50.0) else "no"


    return {
        "name": row["Star system"][:-2],
        "government": government,
        "allegiance": allegiance,
        "population": population,
        "power": power,
        "factions": number_of_factions,
        "influence": f"{indigo_influence}%",
        "is_leader": is_leader,
    }

# Aplica a função em todas as linhas
lista = [criar_objeto(row) for _, row in df.iterrows()]

# Salva no JSON
with open("../data/systems.json", "w", encoding="utf-8") as f:
    json.dump(lista, f, ensure_ascii=False, indent=2)

print("JSON gerado com sucesso!")

