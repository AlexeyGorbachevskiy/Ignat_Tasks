import React from 'react';


export type MessageItemType = {
    id:number
    friend_name: string;
    message_text: string;
    time: string;
    img_name: string;
}


export type MyAffairsType={
    affairsInitArray:Array<AffairsInitArrayType>;
}

export type AffairsInitArrayType={
    id:number;
    affair:string;
    priority:string
}

export type MessageItemComponentType = {
    yourMessage: Array<MessageItemType>;
    notYourMessage: Array<MessageItemType>;
    myAffairs:MyAffairsType;
}


export type StatePropsType = {
    state: MessageItemComponentType;
}


const state = {
    notYourMessage: [
        {
            id:1,
            friend_name: 'Boris Berezovskiy',
            message_text: 'I\'m passed awayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
            time: '20:02',
            img_name: 'img.png'
        },
        {
            id:2,
            friend_name: 'Boris Berezovskiy',
            message_text: 'I fell in love with Putin' ,
            time: '20:06',
            img_name: 'img.png'
        }
    ],
    yourMessage: [
        {
            id: 1,
            friend_name: 'I\'m',
            message_text: 'Hey, How you doing?',
            time: '20:00',
            img_name: 'img.png'
        },
        {
            id: 2,
            friend_name: 'I\'m',
            message_text: 'Oh, and how is it?',
            time: '20:04',
            img_name: 'img.png'
        }
    ],

    myAffairs: {
        affairsInitArray: [
            {id: 1, affair: 'Programming', priority: 'high'},
            {id: 2, affair: 'Training', priority: 'high'},
            {id: 3, affair: 'Fishing', priority: 'low'},
            {id: 4, affair: 'Reading', priority: 'high'},
            {id: 5, affair: 'Roll a cotton', priority: 'low'},
            {id: 6, affair: 'Guitar', priority: 'medium'},
        ]

    }

};




export default state;