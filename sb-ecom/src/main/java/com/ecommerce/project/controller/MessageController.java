package com.ecommerce.project.controller;

import com.ecommerce.project.config.AppConstants;
import com.ecommerce.project.payload.MessageDTO;
import com.ecommerce.project.payload.MessageRequest;
import com.ecommerce.project.payload.MessageResponse;
import com.ecommerce.project.service.MessageService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/messages")
    public ResponseEntity<Map<String, Object>> createMessage(@Valid @RequestBody MessageRequest messageRequest) {
        MessageDTO messageDTO = messageService.createMessage(messageRequest);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Message sent successfully");
        response.put("data", messageDTO);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/admin/messages")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> getAllMessages(
            @RequestParam(name = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
            @RequestParam(name = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
            @RequestParam(name = "sortBy", defaultValue = "createdAt", required = false) String sortBy,
            @RequestParam(name = "sortDir", defaultValue = AppConstants.SORT_DIR, required = false) String sortDir,
            @RequestParam(name = "search", required = false) String search) {
        
        MessageResponse messageResponse = messageService.getAllMessages(pageNumber, pageSize, sortBy, sortDir, search);
        return new ResponseEntity<>(messageResponse, HttpStatus.OK);
    }

    @DeleteMapping("/admin/messages/{messageId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteMessage(@PathVariable Long messageId) {
        messageService.deleteMessage(messageId);
        return new ResponseEntity<>("Message deleted successfully", HttpStatus.OK);
    }
}