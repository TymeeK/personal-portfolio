import React from 'react';
import Card from 'react-bootstrap/Card';
import { DiGithubBadge } from 'react-icons/di';
import '../../app.css';
import './projects.css';

export default function CardContainer(props) {
    return (
        <>
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Body>
                    <div>
                        <Card.Title>
                            <div className='card-title'>{props.title}</div>
                            <div className='card-icon'>
                                <a
                                    href={props.link}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <DiGithubBadge style={{ color: 'white' }} />
                                </a>
                            </div>
                        </Card.Title>
                    </div>

                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
