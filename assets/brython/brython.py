from browser import document
from browser import html


header = document['header']

navbar = html.NAV(Class='navbar is-info is-fixed-top is-spaced',
                  role='navigation',
                  **{'aria-label': 'main navigation'})

navbar_brand = html.DIV(
    html.A(
        html.SPAN(
            "RAFAEL BRUNO",
            Class='title has-text-white has-text-weight-bold'
        ),
        Class='navbar-item',
        href='/'
    ) + html.A(
        html.SPAN(**{'aria-hidden': 'true'})
        + html.SPAN(**{'aria-hidden': 'true'})
        + html.SPAN(**{'aria-hidden': 'true'}),
        **{
            'role': 'button',
            'class': 'navbar-burger',
            'aria-label': 'menu',
            'aria-expanded': 'false',
            'data-target': 'navbarBasicExample',
        }
    ), Class='navbar-brand')

navbar_menu = html.A(
    html.DIV(
        html.A(
            html.BUTTON(
                "HOME",
                Class='button is-info is-outlined \
                    is-inverted has-text-weight-bold is-rounded'
            ),
            Class='navbar-item',
            href='/'
        )
        + html.A(
            html.BUTTON(
                'PROJETOS',
                Class='button is-info is-outlined \
                    is-inverted has-text-weight-bold is-rounded'
            ),
            Class='navbar-item is-size-6 has-text-weight-bold',
            href='/pg_python.html'),
        Class='navbar-start'
    ), Class='navbar-menu', id='navbarBasicExample') + html.A(
    html.DIV(
        html.A(
            html.BUTTON(
                "SOBRE",
                Class='button is-info is-outlined \
                    is-inverted has-text-weight-bold is-rounded'
            ),
            Class='navbar-item',
            href='/pg_sobre.html'
        )
        + html.A(
            html.BUTTON(
                'CONTATO',
                Class='button is-info is-outlined \
                    is-inverted has-text-weight-bold is-rounded'
            ),
            Class='navbar-item is-size-6 has-text-weight-bold',
            href='/pg_contatos.html'),
        Class='navbar-end'
    ), Class='navbar-menu', id='navbarBasicExample')

navbar <= navbar_brand
navbar <= navbar_menu

header <= navbar
