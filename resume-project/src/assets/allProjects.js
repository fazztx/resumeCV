import ePlantShopping from '../../res/projects/e-plantShopping.png';
import basicPOS from '../../res/projects/basicPOS.png';
import javaGameBox from '../../res/projects/javaGameBox.png';

const allProjects = [
  {
    name: 'Shopping Cart Web App',
    picture: ePlantShopping, // Use imported image
    description: [
      'Created functional React components using component composition and nesting.',
      'Implemented React Hooks, specifically the useState and useEffect hooks.',
      'Managed component-level state using hooks to control the visibility of elements.',
      'Integrated Redux within an application using Redux concepts like actions, reducers, and the store.',
      'Dynamically rendered data fetched from an array of objects into the UI. You will map over arrays to generate lists of components.',
      'Handled user events such as button selection and trigger corresponding actions.'
    ]
  },
  {
    name: 'POS System',
    picture: basicPOS, // Use imported image
    description: [
      'Analyzed, designed, implemented, and tested a computer information system for a local business using Java as the language and PostgreSQL as the DBMS.',
      'Applied appropriate development methodologies and project management principles.'
    ]
  },
  {
    name: 'Gamebox',
    picture: javaGameBox, // Use imported image
    description: [
      'Implemented various features to a forked Java Github repository.',
      'Applied Object-Oriented-Programming principles.'
    ]
  }
];

export default allProjects;
