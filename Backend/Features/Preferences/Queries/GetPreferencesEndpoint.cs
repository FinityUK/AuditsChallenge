using FastEndpoints;

namespace Features.Preferences.Queries;

public class Preference
{
    public required string Key { get; set; }
    public string? Value { get; set; }
}

public class Response
{
    public List<Preference> Preferences { get; set; } = new();
}

public class GetPreferencesEndpoint : EndpointWithoutRequest<Response>
{
    public override void Configure()
    {
        Get("/preferences");
        AllowAnonymous();
        Summary(s =>
        {
            s.Summary = "Get current user's preference";
        });
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        await Send.ErrorsAsync(501, ct);
    }
}
