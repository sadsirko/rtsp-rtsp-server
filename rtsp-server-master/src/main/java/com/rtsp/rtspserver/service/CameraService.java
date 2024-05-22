package com.rtsp.rtspserver.service;


import com.rtsp.rtspserver.model.Camera;
import com.rtsp.rtspserver.repository.CameraRepository;
import com.rtsp.rtspserver.server.events.CameraAddedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CameraService {

    @Autowired
    private CameraRepository cameraRepository;
    @Autowired
    private ApplicationEventPublisher eventPublisher;
    public Camera addCamera(Camera camera) {
        Camera newCamera = cameraRepository.addCamera(camera);
//        if (newCamera != null) {
//            eventPublisher.publishEvent(new CameraAddedEvent(this, newCamera.getCameraUrl()));
//        }
        return newCamera;
    }

    public boolean deleteCamera(int id) {
        return cameraRepository.deleteCamera(id);
    }
    public Camera getCamera(int id) {
        return cameraRepository.getCameraById(id);
    }

    public List<Camera> getAllCameras() {
        return cameraRepository.getAllCameras();
    }


}
