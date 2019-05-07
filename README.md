# Styra Frontend Challenge

I decided to complete this challenge using React because it is the frontend framework that I am most comfortable using.

##Part A
After looking at the node object structure I thought the node object had a similar structure to a tree data structure. Therefore I thought it would be a good idea to create a tree table structure with collapsing/expandable rows. The parent nodes would be expandable and display it's children nodes.

Difficulties:
I had some trouble structuring the table in React, mainly because it was difficult to manage state in my parent component and only expand certain rows without when the parent node was clicked.
Because of this, I decided to use an open source component called react-collapsible.
https://github.com/glennflanagan/react-collapsible

Improvements:
If I had more time I would have like to improve the structure and layout of my table. For example, creating another expandable component to display not only node children but the values of those children.

##Part B
In order to sort the nodes, I created 2 functions for sorting the node object in ascending and descending order.

Improvements:
The run time of my sort function is O(n^2) because I am running the function called convertKeysNum(obj) inside my sort function.
I would have potentially liked to improve the runtime to O(nlogn)

##Part C
In order to scale the application to thousands of nodes, I decided to use code splitting and lazy loading. To do is I used the React.lazy and the suspense component.
Other libraries I considered for integrating lazy loading/scaling were:

1. React virtualized: https://bvaughn.github.io/react-virtualized/#/components/List
2. React progressive list: https://github.com/mattcolman/react-progressive-list
3. React intersection loader: https://www.npmjs.com/package/react-intersection-observer

Ideas:
Other ideas I had to scale the application would be to store/cache certain amounts of data/nodes in some form of storage such as localStorage or a non-relational database such as Redis/MongoDB for fast retrieval.

## Getting Started

### `npm install`

Start the application:

### `npm start`

## Built With:

1. [React](https://reactjs.org/)

Thank you very much for giving me the opportunity to tackle this challenge. It was challenging but a good opportunity for me to test myself and find new improvements to make and topics to learn. Hope to be in contact soon!
