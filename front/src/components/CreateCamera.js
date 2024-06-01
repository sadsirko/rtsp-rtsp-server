    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom'; // Додавання useNavigate для редиректу

    function CreateCamera() {
        const [cameraName, setCameraName] = useState('');
        const [cameraUrl, setCameraUrl] = useState('');
        const [cameraTypeId, setCameraTypeId] = useState('');
        const [cameraTypes, setCameraTypes] = useState([]);
        const navigate = useNavigate(); // Хук для редиректу

        useEffect(() => {
            async function fetchCameraTypes() {
                try {
                    const result = await axios.get('http://localhost:8080/api/camera-types', {
                        auth: {
                            username: '1',
                            password: '1'
                        }
                    });
                    setCameraTypes(result.data);
                    if (result.data.length > 0) {
                        setCameraTypeId(result.data[0].typeId); // Встановлення першого доступного типу камери
                    }
                } catch (error) {
                    console.error('Error fetching camera types:', error);
                }
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
                alert('Камеру успішно додано!');
                navigate('/'); // Редирект на головну сторінку
            } catch (error) {
                console.error('Exception during camera:', error);
            }
        };

        return (
            <div>
                <h2>Create connection</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Назва:</label>
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
                        <label>Тип:</label>
                        <select
                            value={cameraTypeId}
                            onChange={(e) => setCameraTypeId(e.target.value)}
                        >
                            {cameraTypes.map((type) => (
                                <option key={type.typeId} value={type.typeId}>
                                    {type.typeName}
                                </option>
                            ))}
                        </select>

                    </div>
                    <button type="submit">Add camera</button>
                </form>
            </div>
        );
    }

    export default CreateCamera;
