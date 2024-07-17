import { observer } from 'mobx-react-lite'
import React from 'react'
import userStore from '../stores/UserStore'

import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { ThumbDown, ThumbUp } from '@mui/icons-material'

const UserCard: React.FC = observer(() => {
    const user = userStore.currentUser
    return (
        <Card>
            <CardMedia
                component="img"
                image={user.image}
                height='400'
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {user.bio}
                </Typography>
            </CardContent>

            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 16px 16px 16px' }}>
                <IconButton color="primary" onClick={() => userStore.likeUser()}>
                    <ThumbUp />
                </IconButton>

                <IconButton color='secondary' onClick={() => userStore.dislikeUser()}>
                    <ThumbDown/>
                </IconButton>

            </div>
        </Card>
    )
})

export default UserCard
