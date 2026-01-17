package com.ecommerce.project.repositories;

import com.ecommerce.project.model.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    
    @Query("SELECT m FROM Message m WHERE " +
           "LOWER(m.name) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(m.email) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(m.message) LIKE LOWER(CONCAT('%', :search, '%'))")
    Page<Message> findBySearchTerm(@Param("search") String search, Pageable pageable);
}