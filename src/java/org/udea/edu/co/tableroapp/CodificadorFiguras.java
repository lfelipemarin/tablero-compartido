/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.udea.edu.co.tableroapp;

import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

/**
 *
 * @author toughbook
 */
public class CodificadorFiguras implements Encoder.Text<Figura> {

    @Override
    public String encode(Figura figura) throws EncodeException {
        return figura.getJson().toString();
    }

    @Override
    public void init(EndpointConfig config) {
        System.out.println("inicializar");
    }

    @Override
    public void destroy() {
        System.out.println("destruir");
    }

}
