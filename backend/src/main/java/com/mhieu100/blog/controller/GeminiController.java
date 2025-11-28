package com.mhieu100.blog.controller;

import com.mhieu100.blog.dto.AiArticleResponse;
import com.mhieu100.blog.dto.AiGenerateRequest;
import com.mhieu100.blog.service.GeminiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class GeminiController {

    private final GeminiService geminiService;

    @PostMapping("/generate")
    public ResponseEntity<AiArticleResponse> generateArticle(@RequestBody AiGenerateRequest request) {
        AiArticleResponse response = geminiService.generateContent(request.getPrompt());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/chat")
    public ResponseEntity<Map<String, String>> chat(@RequestBody AiGenerateRequest request) {
        String response = geminiService.chat(request.getPrompt());
        return ResponseEntity.ok(Map.of("content", response));
    }
}
