import { StrictMode } from 'react';
import { render } from '@testing-library/react'
import './index.css';
import ClassWebsite from './components/ClassWebsite';


render(
<StrictMode>
    <ClassWebsite />,
</StrictMode>,
);


//This is for the initial commit
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
