package com.mhieu100.blog.dto;

import lombok.Data;
import java.util.List;

@Data
public class AiArticleResponse {
    private String title;
    private String content;
    private List<String> tags;
}
