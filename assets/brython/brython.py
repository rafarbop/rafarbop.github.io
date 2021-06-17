from browser import document
from browser import bind
from browser.template import Template


# Incluindo cabeçalho nas páginas
Template("header").render(name="RAFAEL BRUNO")
Template("section_home").render()
Template("section_projetos").render()
Template("section_sobre").render()
Template("section_contato").render()

# Hidden section
# document["section_home"].style.display = "flex"
# document["section_projetos"].style.display = "none"
# document["section_sobre"].style.display = "none"
# document["section_contato"].style.display = "none"

# Menu Home
@bind("#menu_home", "click")
def show_home(event):
    document["section_home"].classList.remove("is-hidden")
    document["section_projetos"].classList.add("is-hidden")
    document["section_sobre"].classList.add("is-hidden")
    document["section_contato"].classList.add("is-hidden")


# Menu de Projetos
@bind("#menu_projetos", "click")
def show_projetos(event):
    document["section_home"].classList.add("is-hidden")
    document["section_projetos"].classList.remove("is-hidden")
    document["section_sobre"].classList.add("is-hidden")
    document["section_contato"].classList.add("is-hidden")

# Menu Sobre
@bind("#menu_sobre", "click")
def show_sobre(event):
    document["section_home"].classList.add("is-hidden")
    document["section_projetos"].classList.add("is-hidden")
    document["section_sobre"].classList.remove("is-hidden")
    document["section_contato"].classList.add("is-hidden")


# Menu Contatos
@bind("#menu_contato", "click")
def show_contato(event):
    document["section_home"].classList.add("is-hidden")
    document["section_projetos"].classList.add("is-hidden")
    document["section_sobre"].classList.add("is-hidden")
    document["section_contato"].classList.remove("is-hidden")