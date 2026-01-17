package com.ecommerce.project.service;

import com.ecommerce.project.exceptions.ResourceNotFoundException;
import com.ecommerce.project.model.Message;
import com.ecommerce.project.model.User;
import com.ecommerce.project.payload.MessageDTO;
import com.ecommerce.project.payload.MessageRequest;
import com.ecommerce.project.payload.MessageResponse;
import com.ecommerce.project.repositories.MessageRepository;
import com.ecommerce.project.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public MessageDTO createMessage(MessageRequest messageRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = null;
        
        if (authentication != null && authentication.isAuthenticated() && 
            !authentication.getName().equals("anonymousUser")) {
            user = userRepository.findByUserName(authentication.getName()).orElse(null);
        }

        Message message = new Message(
            messageRequest.getName(),
            messageRequest.getEmail(),
            messageRequest.getSubject(),
            messageRequest.getMessage(),
            user
        );

        Message savedMessage = messageRepository.save(message);
        MessageDTO messageDTO = modelMapper.map(savedMessage, MessageDTO.class);
        
        if (user != null) {
            messageDTO.setUserName(user.getUserName());
        }
        
        return messageDTO;
    }

    @Override
    public MessageResponse getAllMessages(Integer pageNumber, Integer pageSize, String sortBy, String sortDir, String search) {
        Sort sort = sortDir.equalsIgnoreCase("desc") ? 
            Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        
        Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
        Page<Message> messagePage;
        
        if (search != null && !search.trim().isEmpty()) {
            messagePage = messageRepository.findBySearchTerm(search, pageable);
        } else {
            messagePage = messageRepository.findAll(pageable);
        }

        List<MessageDTO> messageDTOs = messagePage.getContent().stream()
            .map(message -> {
                MessageDTO dto = modelMapper.map(message, MessageDTO.class);
                if (message.getUser() != null) {
                    dto.setUserName(message.getUser().getUserName());
                }
                return dto;
            }).toList();

        return new MessageResponse(
            messageDTOs,
            messagePage.getNumber(),
            messagePage.getSize(),
            messagePage.getTotalElements(),
            messagePage.getTotalPages(),
            messagePage.isLast()
        );
    }

    @Override
    public void deleteMessage(Long messageId) {
        Message message = messageRepository.findById(messageId)
            .orElseThrow(() -> new ResourceNotFoundException("Message", "messageId", messageId));
        
        messageRepository.delete(message);
    }
}