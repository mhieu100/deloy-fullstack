package com.mhieu100.blog.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/project-info")
public class ProjectInfoController {

    @GetMapping
    public ResponseEntity<Map<String, String>> getProjectInfo() {
        Map<String, String> info = new HashMap<>();
        info.put("name", "Blog Application");
        info.put("version", "1.0.0");
        info.put("description", "A fullstack blog application built with Spring Boot and React.");
        info.put("author", "mhieu100");
        info.put("ci_cd", "Enabled with GitHub Actions and Render");

        return ResponseEntity.ok(info);
    }
}
