package com.muradismayilov.hrservice.business.abstracts;

import com.muradismayilov.hrservice.business.requests.CreateMiscRequest;
import com.muradismayilov.hrservice.business.requests.UpdateMiscRequest;
import com.muradismayilov.hrservice.business.responses.GetAllMiscResponse;

import java.util.List;

public interface MiscService {
    void addMisc(String username,CreateMiscRequest createMiscRequest);

    List<GetAllMiscResponse> getAll();

    void deleteMisc(int id);

    void updateMisc(String username, UpdateMiscRequest updateMiscRequest);
}
