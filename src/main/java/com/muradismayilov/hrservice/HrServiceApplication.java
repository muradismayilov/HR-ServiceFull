package com.muradismayilov.hrservice;

import com.muradismayilov.hrservice.business.core.utulities.exceptions.BusinessException;
import com.muradismayilov.hrservice.business.core.utulities.exceptions.ProblemDetails;
import com.muradismayilov.hrservice.business.core.utulities.exceptions.ValidationProblemDetails;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;




@SpringBootApplication
@RestControllerAdvice
public class HrServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrServiceApplication.class, args);
	}


	/*@ExceptionHandler
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	public ProblemDetails handleBusinessException(BusinessException businessException){

		ProblemDetails problemDetails = new ProblemDetails();
		problemDetails.setMessage(businessException.getMessage());
		return problemDetails;


	}

	@ExceptionHandler
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	public ProblemDetails handleValidationException(MethodArgumentNotValidException methodArgumentNotValidException) {

		ValidationProblemDetails validationProblemDetails = new ValidationProblemDetails();
		validationProblemDetails.setMessage("Validation Problem");
		validationProblemDetails.setValidationErrors(new HashMap<>());
		for (FieldError fielderror:methodArgumentNotValidException.getBindingResult().getFieldErrors()) {

			validationProblemDetails.getValidationErrors().put(fielderror.getField(),fielderror.getDefaultMessage());
		}
		return validationProblemDetails;
	}*/
	@Bean
	public ModelMapper getmodelMapper() {
		return new ModelMapper();

	}


}