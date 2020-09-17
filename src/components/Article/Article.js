import React from 'react';
import {Media} from 'reactstrap';

const Article = props => {
    return (
        <Media>
            <Media body>
                <Media heading>
                    {props.title}
                </Media>
                {props.text}
                <p><em>~ {props.date}</em></p>
            </Media>
        </Media>
    );
};

export default Article;