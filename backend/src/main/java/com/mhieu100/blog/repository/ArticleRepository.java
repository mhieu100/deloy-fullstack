package com.mhieu100.blog.repository;

import com.mhieu100.blog.entity.Article;
import com.mhieu100.blog.entity.ArticleStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findByStatus(ArticleStatus status);

    List<Article> findByAuthorId(Long authorId);
}
