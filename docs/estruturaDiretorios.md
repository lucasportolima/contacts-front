# Estrutura de diretórios

```sh

# Diretórios

src
├── assets
│   └── stylesheets
└── modules
    ├── account
    │   ├── authentication
    │   │   ├── service
    │   │   ├── store
    │   │   └── views
    │   │       ├── components
    │   │       └── pages
    │   ├── role
    │   │   └── store
    │   └── user
    │       ├── service
    │       ├── store
    │       └── views
    │           └── pages
    └── core
        ├── helpers
        ├── network
        ├── plugins
        ├── service
        ├── store
        └── views
            ├── pages
            └── templates
                └── DefaultLayaut
tests
└── e2e
    ├── plugins
    ├── specs
    └── support
node_modules
└──...
public
└── img
    └── icons
```

## src

Disponibiliza o core ou source da aplicação.

### assets

Contém itens relacionados a folhas de estilo e imagens.

### modules

Neste diretório estão contidos diretórios agrupados de acordo com o domínio da aplicação.

### modules

Representa o **domínio** da aplicação. Cada domínio da aplicação pode possuir um ou muitos módulos.

#### features

os módulos podem ter funcionalidades que são representadas por **features**. As features possuem estruturas semelhantes ao módulo de origem.
