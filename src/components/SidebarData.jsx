import React from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Groups2Icon from '@mui/icons-material/Groups2';

export const SidebarData = [
    {
        title: "My Recipes",
        icon: <DescriptionIcon />,
        link: "/"
        
    },
    {
        title: "Add New Recipe",
        icon: <NoteAddIcon />,
        link: "/add-recipe"
        
    },
    {
        title: "About Us",
        icon: <Groups2Icon />,
        link: "/about"
        
    }
]


