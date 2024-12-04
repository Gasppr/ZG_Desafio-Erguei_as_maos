package aczgdesafio.api.controller;

import aczgdesafio.api.Letra;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LetraController {

    @GetMapping
    public String letra(){
        Letra letra = new Letra();

        return letra.getLetra();
    }
}
