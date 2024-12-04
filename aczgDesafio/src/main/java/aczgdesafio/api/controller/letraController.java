package aczgdesafio.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/letra")
public class letraController {

    @GetMapping
    public String letra(){
        return "Hello world!";
    }
}
