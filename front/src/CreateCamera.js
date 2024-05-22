import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateCamera() {
    const [cameraName, setCameraName] = useState('');
    const [cameraUrl, setCameraUrl] = useState('');
    const [cameraTypeId, setCameraTypeId] = useState('');
    const [cameraTypes, setCameraTypes] = useState([]);

    useEffect(() => {
        async function fetchCameraTypes() {
            const result = await axios.get('http://localhost:8080/api/camera-types', {
                auth: {
                    username: '1',
                    password: '1'
                }
            });
            setCameraTypes(result.data);
        }
        fetchCameraTypes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCamera = { cameraName, cameraUrl, cameraTypeId: parseInt(cameraTypeId) };
        try {
            await axios.post('http://localhost:8080/api/cameras', newCamera, {
                auth: {
                    username: '1',
                    password: '1'
                }
            });
            // Optionally, redirect or show a success message
        } catch (error) {
            console.error('Error creating camera:', error);
        }
    };

    return (
        <div>
            <h2>Create Camera</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={cameraName}
                        onChange={(e) => setCameraName(e.target.value)}
                    />
                </div>
                <div>
                    <label>URL:</label>
                    <input
                        type="text"
                        value={cameraUrl}
                        onChange={(e) => setCameraUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>Type:</label>
                    <select
                        value={cameraTypeId}
                        onChange={(e) => setCameraTypeId(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        {cameraTypes.map((type) => (
                            <option key={type.typeId} value={type.typeId}>
                                {type.typeName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create Camera</button>
            </form>
        </div>
    );
}

export default CreateCamera;
