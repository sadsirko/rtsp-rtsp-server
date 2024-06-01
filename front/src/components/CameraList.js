import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/CameraList.css'; // Custom CSS for spacing and alignment
import { useNavigate } from 'react-router-dom';

function CameraList() {
    const [cameras, setCameras] = useState([]);
    // const history = useNavigate();
    const navigate = useNavigate();


        useEffect(() => {
            async function fetchData() {
                try {
                    const result = await axios.get('http://localhost:8080/api/cameras', {
                        auth: {
                            username: '1',
                            password: '1'
                        }
                    });
                    setCameras(result.data);
                } catch (error) {
                    console.error("There was an error fetching the cameras!", error);
                }
            }

            fetchData();
        }, []);

    const handleEdit = (cameraId) => {
        navigate(`/edit-camera/${cameraId}`);
    };

    const handleDelete = async (cameraId) => {
        try {
            await axios.delete(`http://localhost:8080/api/cameras/${cameraId}`, {
                auth: {
                    username: '1',
                    password: '1'
                }
            });
            setCameras(cameras.filter(camera => camera.cameraId !== cameraId));
        } catch (error) {
            console.error("There was an error deleting the camera!", error);
        }
    };

    const handleCopyPath = async (cameraId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/cameras/${cameraId}/rtsp-url`, {
                auth: {
                    username: '1',
                    password: '1'
                }
            });
            navigator.clipboard.writeText(response.data);
            alert('RTSP URL copied to clipboard!');
        } catch (error) {
            console.error("Failed to fetch RTSP URL", error);
        }
    };


    return (
            <div className="container">
                {cameras.map(camera => (
                    <div key={camera.cameraId} className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{camera.cameraName}</h5>
                            <div className="btn-group">
                                <button className="btn btn-primary" onClick={() => handleEdit(camera.cameraId)}>Configure</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(camera.cameraId)}>Delete</button>
                                <button className="btn btn-secondary" onClick={() => handleCopyPath(camera.cameraId)}>Copy Path</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    export default CameraList;