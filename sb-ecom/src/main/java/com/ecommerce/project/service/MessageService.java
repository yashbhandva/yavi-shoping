package com.ecommerce.project.service;

import com.ecommerce.project.payload.MessageDTO;
import com.ecommerce.project.payload.MessageRequest;
import com.ecommerce.project.payload.MessageResponse;

public interface MessageService {
    MessageDTO createMessage(MessageRequest messageRequest);
    MessageResponse getAllMessages(Integer pageNumber, Integer pageSize, String sortBy, String sortDir, String search);
    void deleteMessage(Long messageId);
}