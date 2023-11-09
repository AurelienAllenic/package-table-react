# React Employee Table Package

Ce package React permet de mettre en forme des données en tableau d'employés. Il fournit un composant EmployeeTable qui prend un tableau d'objets users en tant que prop et affiche les données de chaque employé dans un tableau.

## Installation

Pour installer ce package, vous pouvez utiliser npm ou yarn :

npm install react-employee-table

### ou

yarn add react-employee-table


## Utilisation

Voici un exemple d'utilisation du composant EmployeeTable :

```
import React from 'react';
import EmployeeTable from 'react-employee-table';

const App = () => {
  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: new Date('1990-01-01'),
      startDate: new Date('2020-01-01'),
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      department: 'Sales',
    },
    // Ajoutez d'autres employés ici
  ];

  return (
    <div>
      <h1>Liste des employés</h1>
      <EmployeeTable users={users} />
    </div>
  );
};

export default App;
```

Assurez-vous d'importer le CSS nécessaire pour le composant EmployeeTable. Vous pouvez utiliser le fichier CSS fourni avec le package ou le personnaliser selon vos besoins.

## Personnalisation

Le composant EmployeeTable peut être personnalisé en utilisant des props supplémentaires. Par exemple, vous pouvez modifier les en-têtes de colonne ou ajouter des actions supplémentaires.

Voici un exemple de personnalisation :
```
<EmployeeTable
  users={users}
  columns={[
    { label: 'Prénom', key: 'firstName' },
    { label: 'Nom', key: 'lastName' },
    { label: 'Ville', key: 'city' },
    { label: 'État', key: 'state' },
    { label: 'Département', key: 'department' },
  ]}
  actions={[
    { label: 'Modifier', onClick: handleEdit },
    { label: 'Supprimer', onClick: handleDelete },
  ]}
/>
```

Dans cet exemple, nous avons modifié les en-têtes de colonne pour afficher uniquement les colonnes qui nous intéressent et ajouté des actions supplémentaires pour chaque employé.

## Contributions

Les contributions sont les bienvenues! Si vous avez des idées d'amélioration ou des correctifs de bogues, n'hésitez pas à ouvrir une pull request ou à créer une issue sur GitHub.

## Keywords

- React
- Tableau d'employés
- Personnalisation
- Props
- Actions


