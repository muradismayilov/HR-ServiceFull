package com.muradismayilov.hrservice.business.core.utulities.mappers;

import org.modelmapper.ModelMapper;


 public interface ModelMapperService {
 ModelMapper forResponse();
    ModelMapper forRequest();
}
