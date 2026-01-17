package com.ecommerce.project.payload;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class MessageRequest {
    @NotBlank
    @Size(max = 100)
    private String name;

    @NotBlank
    @Size(max = 150)
    @Email
    private String email;

    @NotBlank
    @Size(max = 200)
    private String subject;

    @NotBlank
    private String message;
}