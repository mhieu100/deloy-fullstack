package com.mhieu100.blog.repository;

import com.mhieu100.blog.entity.Article;
import com.mhieu100.blog.entity.ArticleStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findByStatus(ArticleStatus status);

    List<Article> findByAuthorId(Long authorId);

    @org.springframework.data.jpa.repository.Query("SELECT a FROM Article a WHERE a.status = 'APPROVED' AND (LOWER(a.title) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(a.content) LIKE LOWER(CONCAT('%', :query, '%')))")
    List<Article> searchArticles(@org.springframework.data.repository.query.Param("query") String query);

    org.springframework.data.domain.Page<Article> findByStatus(ArticleStatus status,
            org.springframework.data.domain.Pageable pageable);

    @org.springframework.data.jpa.repository.Query("SELECT a FROM Article a WHERE a.status = 'APPROVED' AND (:query IS NULL OR LOWER(a.title) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(a.content) LIKE LOWER(CONCAT('%', :query, '%')))")
    org.springframework.data.domain.Page<Article> searchApprovedArticles(
            @org.springframework.data.repository.query.Param("query") String query,
            org.springframework.data.domain.Pageable pageable);
}
