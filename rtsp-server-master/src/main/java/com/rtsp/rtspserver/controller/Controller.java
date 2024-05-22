package com.rtsp.rtspserver.controller;

import com.rtsp.rtspserver.model.Camera;
import com.rtsp.rtspserver.service.CameraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cameras")
public class Controller {

    @Autowired
    private CameraService cameraService;

    @PostMapping
    public ResponseEntity<Camera> addCamera(@RequestBody Camera camera) {
        return ResponseEntity.ok(cameraService.addCamera(camera));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCamera(@PathVariable String id) {
        if(cameraService.deleteCamera(Integer.parseInt(id)))
        return ResponseEntity.ok().build();
        return null;
    }

    @GetMapping
    public ResponseEntity<List<Camera>> getAllCameras() {
        return ResponseEntity.ok(cameraService.getAllCameras());
    }

}
