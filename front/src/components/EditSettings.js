import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Configure.css'; // Ensure styles are appropriate for new form elements

function CameraSettings() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [camera, setCamera] = useState({
        cameraName: '',
        cameraUrl: '',
        durationTime: 30 // Default duration
    });
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        const fetchCameraData = async () => {
            const response = await axios.get(`http://localhost:8080/api/cameras/${id}`);
            setCamera(response.data);
            const recordResponse = await axios.get(`http://localhost:8080/api/records/active/${id}`);
            setIsRecording(recordResponse.data.active);
        };
        fetchCameraData();
    }, [id]);

    const validateAndStartRecording = () => {
        const duration = parseInt(camera.durationTime);
        if (duration < 1 || duration > 30) {
            alert('Duration must be between 1 and 30 minutes.');
            return;
        }
        handleStartRecording();
    };

    const handleStartRecording = async () => {
        try {
            await axios.post('http://localhost:8080/api/records/start', {
                cameraId: id,
                durationTime: camera.durationTime
            });
            alert('Recording started successfully!');
            window.location.reload(); // Refresh the page to reflect changes
        } catch (error) {
            console.error('Error starting recording:', error);
            alert('Failed to start recording!');
        }
    };

    const handleStopRecording = async () => {
        try {
            await axios.post('http://localhost:8080/api/records/stop', { cameraId: id });
            alert('Recording stopped successfully!');
            window.location.reload(); // Refresh the page to reflect changes
        } catch (error) {
            console.error('Error stopping recording:', error);
            alert('Failed to stop recording!');
        }
    };

    return (
        <div>
            <h2>Camera Settings</h2>
            <div>
                <label>Camera Name:</label>
                <input type="text" className="input-common" value={camera.cameraName} onChange={e => setCamera({...camera, cameraName: e.target.value})} />
            </div>
            <div>
                <label>Camera URL:</label>
                <input type="text" className="input-common" value={camera.cameraUrl} onChange={e => setCamera({...camera, cameraUrl: e.target.value})} />
            </div>
            <div>
                <label>Recording Duration (min):</label>
                <input type="number" className="input-common" value={camera.durationTime} onChange={e => setCamera({...camera, durationTime: parseInt(e.target.value)})} />
            </div>
            {isRecording ? (
                <button onClick={handleStopRecording} className="button-common danger">Stop Recording</button>
            ) : (
                <button onClick={validateAndStartRecording} className="button-common primary">Start Recording</button>
            )}
            <button onClick={() => navigate('/')} className="button-common success">Update Settings</button>
        </div>
    );
}

export default CameraSettings;
