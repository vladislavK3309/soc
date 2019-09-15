export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, how are you?', likesCount: 12},
                {id: 2, message: 'it is my first post', likesCount: 10},
                {id: 3, message: 'yo', likesCount: 22},
                {id: 4, message: 'yoyo', likesCount: 213},
            ],
            newPostText: 'it kamasutra'
        },
        dialogsPage: {
            messages: [
                {message: 'hi'},
                {message: 'how is your'},
                {message: 'yo'},
                {message: 'yo'},
                {message: 'yo'}
            ],
            dialogs: [
                {id: 1, name: 'demyan'},
                {id: 2, name: 'anton'},
                {id: 3, name: 'masha'},
                {id: 4, name: 'katya'},
                {id: 5, name: 'anton'}
            ]
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    name: 'vanya',
                    avatar: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    id: 2,
                    name: 'katya',
                    avatar: 'data:image/jpeg;base64,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'
                },
                {
                    id: 3,
                    name: 'anton',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DRvfoKsaCBlpFAyAuGi3LFWad0Bx3PfVgKwTmZhUj24zYdMy'
                },
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => {
        return {type: 'ADD-POST'}
    };
    export const updateNewPostTextActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
};



window.store = store;

