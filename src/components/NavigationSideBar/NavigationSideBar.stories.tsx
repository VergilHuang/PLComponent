// import React, { useState, FC } from 'react';
// // import { action } from '@storybook/addon-actions'
// import NavigationSideBar from '.';
// import PLButton from '../PLButton';

// export default {
//     component: NavigationSideBar,
//     title: 'NavigationSideBar'
// };


// export const defaultSideBar: FC = () => {
//     const [IsSidebarOpen, setIsSidebarOpen] = useState(false)

//     return <div style={{
//         display: "flex",
//         justifyContent: 'center',
//         alignItems: "center",
//         height: "80vh"
//     }}>
//         <PLButton onClick={() => setIsSidebarOpen(true)}>Open</PLButton>
//         <NavigationSideBar active={IsSidebarOpen} onClose={() => setIsSidebarOpen(false)} >
//             <ul className={'sidebar-list'}>
//                 <li className="sidebar-list-item">list</li>
//                 <li className="sidebar-list-item">list</li>
//                 <li className="sidebar-list-item">list</li>
//                 <li className="sidebar-list-item">list</li>
//                 <li className="sidebar-list-item">list</li>
//                 <li className="sidebar-list-item">list</li>
//             </ul>
//         </NavigationSideBar>

//     </div>
// }