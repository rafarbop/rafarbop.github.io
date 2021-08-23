from browser import document
from browser import bind
from browser.template import Template


# Preloader with Banner - Close and Show Main Page
@bind("#closebanner", "click")
def close_banner(event):
    document["preLoadBanner"].classList.add("is-hidden")
    document["mainContent"].classList.remove("is-hidden")


# Incluindo cabeçalho nas páginas
Template("header").render(name="RAFAEL BRUNO")
Template("section_home").render()
Template("section_projetos").render()


# Menu NavBar-Burger
@bind("#navbarBurger", "click")
def show_menu_burger(event):
    document["navbarBurger"].classList.toggle('is-active')
    document["navbarBasic"].classList.toggle('is-active')


@bind("#closebanner", "mouseover")
def alter_banner_in(event):
    document["closebanner"].style.border = "4px solid hsl(204, 95%, 20%)"


@bind("#closebanner", "mouseout")
def alter_banner_out(event):
    document["closebanner"].style.border = "none"


# Hidden section
# document["section_home"].style.display = "flex"
# document["section_projetos"].style.display = "none"


# Menu Home
@bind("#menu_home", "click")
def show_home(event):
    document["section_home"].classList.remove("is-hidden")
    document["section_projetos"].classList.add("is-hidden")


# Menu de Projetos
@bind("#menu_projetos", "click")
def show_projetos(event):
    document["section_home"].classList.add("is-hidden")
    document["section_projetos"].classList.remove("is-hidden")
