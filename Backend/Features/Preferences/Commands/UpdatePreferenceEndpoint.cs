using FastEndpoints;

namespace Features.Preferences.Commands;

public class Request
{
    public required string Key { get; set; }
    public string? Value { get; set; }
}

public class Response
{
    public bool Success { get; set; }
}

public class UpdatePreferenceEndpoint : Endpoint<Request, Response>
{
    public override void Configure()
    {
        Put("/preferences");
        AllowAnonymous();
        Summary(s =>
        {
            s.Summary = "Update current user's preference";
        });
    }

    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        await Send.ErrorsAsync(501, ct);
    }
}
